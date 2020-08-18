module.exports = {
  roots: ['./src', './test'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'Domain Module Tests',
        outputDirectory: '.',
        outputName: './TESTS-Domain.xml',
        classNameTemplate: '{filename} - {title}',
        titleTemplate: '{filename} - {title}',
        ancestorSeparator: ' › '
      }
    ]
  ]
};
