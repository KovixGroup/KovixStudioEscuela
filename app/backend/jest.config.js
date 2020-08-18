module.exports = {
  roots: ['./src', './test'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '/test/.*\\.spec.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'backend Tests',
        outputDirectory: '.',
        outputName: './TESTS-backend.xml',
        classNameTemplate: '{filename} - {title}',
        titleTemplate: '{filename} - {title}',
        ancestorSeparator: ' › '
      }
    ]
  ]
};
