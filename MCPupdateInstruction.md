# MCP Update & npm Publish Instructions

This guide documents how to publish updates to the jpi-mcp package on npm after making changes to the MCP server.

## Prerequisites

- Node.js 18+
- npm account with publish access to the `jpi-mcp` package
- Granular access token with 2FA bypass enabled

---

## Step-by-Step Publishing Process

### Step 1: Make Your Code Changes

Edit the source files in `src/`:
- `src/index.ts` - MCP server, tool definitions
- `src/client.ts` - JPI API client
- `src/types/` - TypeScript type definitions

### Step 2: Build and Test

```bash
# Build the project
npm run build

# Test locally (optional)
JPI_API_TOKEN=your-token npm start
```

### Step 3: Bump the Version

Use semantic versioning:

```bash
# Patch release (1.0.0 → 1.0.1) - Bug fixes, minor changes
npm version patch

# Minor release (1.0.0 → 1.1.0) - New features, backward compatible
npm version minor

# Major release (1.0.0 → 2.0.0) - Breaking changes
npm version major
```

This automatically:
- Updates `package.json` version
- Creates a git commit with the version tag

### Step 4: Configure npm Token (First Time Only)

If you haven't configured your npm token:

```bash
npm config set //registry.npmjs.org/:_authToken YOUR_NPM_TOKEN
```

Replace `YOUR_NPM_TOKEN` with your granular access token from npmjs.com.

### Step 5: Publish to npm

```bash
npm publish
```

This will:
- Run `npm run build` (via prepublishOnly hook)
- Upload the package to npm registry

### Step 6: Push to GitHub

```bash
git push
git push --tags
```

### Step 7: Verify Publication

```bash
npm view jpi-mcp
```

Check that the version number is updated.

---

## npm Token Setup

### Creating a Granular Access Token

1. Go to https://www.npmjs.com/settings/YOUR_USERNAME/tokens
2. Click "Generate New Token" → "Granular Access Token"
3. Configure:
   - **Token name**: e.g., "jpi-mcp-publish"
   - **Expiration**: Choose appropriate duration
   - **Packages and scopes**: "Read and write" to all packages (or specific package)
   - **Organizations**: No access (unless needed)
   - **Security settings**: Check "Bypass two-factor authentication (2FA)"
4. Click "Generate Token"
5. **Copy the token immediately** - it's only shown once!

### Configuring Token Locally

**Option 1: Global config (Recommended)**
```bash
npm config set //registry.npmjs.org/:_authToken YOUR_TOKEN
```

This stores the token in `~/.npmrc` (your home folder).

**Option 2: Project-level .npmrc**
Create `.npmrc` in the project root:
```
//registry.npmjs.org/:_authToken=YOUR_TOKEN
```

**Warning**: If using Option 2, add `.npmrc` to `.gitignore` to avoid exposing your token!

### Checking Token Configuration

```bash
npm config get //registry.npmjs.org/:_authToken
```

---

## Troubleshooting

### Error: 401 Unauthorized

**Cause**: Token expired or invalid.

**Fix**:
```bash
# Check if token is set
npm config get //registry.npmjs.org/:_authToken

# Re-login or set new token
npm config set //registry.npmjs.org/:_authToken YOUR_NEW_TOKEN
```

### Error: 403 Forbidden - Two-factor authentication required

**Cause**: Token doesn't have 2FA bypass enabled.

**Fix**:
1. Go to npmjs.com → Access Tokens
2. Delete the old token
3. Create a new granular token with "Bypass two-factor authentication (2FA)" checked
4. Configure the new token locally

### Error: 404 Not Found

**Cause**: Package doesn't exist or no permission.

**Fix**: Check package name in `package.json` matches your npm package.

### Users Getting Old Version

**Cause**: npx caches packages locally.

**Fix**: Tell users to clear npx cache:
```bash
# Clear npx cache
rm -rf ~/.npm/_npx

# Or restart Claude Desktop and wait for fresh download
```

---

## Version Numbering Guide

Follow [Semantic Versioning](https://semver.org/):

| Change Type | Version Bump | Example | When to Use |
|-------------|--------------|---------|-------------|
| **Patch** | x.x.X | 1.0.0 → 1.0.1 | Bug fixes, typo corrections, minor documentation updates |
| **Minor** | x.X.0 | 1.0.0 → 1.1.0 | New features, new tools, backward-compatible changes |
| **Major** | X.0.0 | 1.0.0 → 2.0.0 | Breaking changes, API changes, removed features |

---

## Quick Reference

```bash
# Full publish workflow
npm run build              # Build
npm version patch          # Bump version (or minor/major)
npm publish                # Publish to npm
git push && git push --tags  # Push to GitHub
npm view jpi-mcp           # Verify
```

---

## Related Links

- npm package: https://www.npmjs.com/package/jpi-mcp
- GitHub repo: https://github.com/etep82/jpi-mcp
- npm tokens: https://www.npmjs.com/settings/etep82/tokens
