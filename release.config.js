module.exports = {
  repositoryUrl: 'git@github.com:WTW-IM/babel-preset-wtw-im.git',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/github',
    '@semantic-release/npm',
    ['@semantic-release/git', {
      message: 'Docs: ${nextRelease.version} [skip ci]\n\n${nextRelease.note}'
    }]
  ],
  preset: 'eslint'
}
