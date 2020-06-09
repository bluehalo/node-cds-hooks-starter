const getRiskHook = require('./get-risk.hook');

describe('hook: test get-risk', () => {
  test('should have definition and handler', () => {
    const expectedDefinition = {
      hook: 'patient-view',
      name: 'CDS Service Starter Patient View',
      description: 'An example of a CDS Service that displays "Hello World!"',
      id: 'cds-service-starter-patient-view',
      prefetch: {
        patient: 'Patient/{{context.patientId}}',
      },
    };
    expect(getRiskHook).toHaveProperty('definition');
    expect(getRiskHook).toHaveProperty('handler');

    expect(getRiskHook.definition).toStrictEqual(expectedDefinition);
    expect(getRiskHook.handler).toBeInstanceOf(Function);
  });
  test('should test the logic of handler', () => {});
});
