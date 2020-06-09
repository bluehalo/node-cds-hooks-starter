const definition = {
  hook: 'patient-view',
  name: 'CDS Service Starter Patient View',
  description: 'An example of a CDS Service that displays "Hello World!"',
  id: 'cds-service-starter-patient-view',
  prefetch: {
    patient: 'Patient/{{context.patientId}}',
  },
};

const handler = (req, res) => {
  const patient = req.body.prefetch.patient;

  const text = `Hello world. Hook: 'patient-view' -- Patient ${patient.id}`;

  let cards = {
    cards: [
      {
        summary: `Summary: ${text}`,
        detail: `Detail: ${text}`,
        source: {
          label: 'CDS Service Starter',
          url: 'https://example.com',
        },
        indicator: 'info',
      },
    ],
  };
  res.json(cards);
};

module.exports = { definition, handler };
