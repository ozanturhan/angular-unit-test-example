module.exports = {
  name: 'unit test',
  preset: 'jest-preset-angular',
  coverageDirectory: 'coverage',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
  setupFilesAfterEnv: ['./src/test-setup.ts', './src/setTimeout.js'],
};
