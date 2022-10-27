import { useState } from 'react';

import ThreatIntelligenceLayout from '../../layouts/threat_intelligence';
import { IndicatorsTable } from '../../components/indicators_table/indicators_table';

import { IndicatorsContext } from '../../context/indicators';
import { indicators as rawIndicators } from '../../lib/ti_data';

const flattenObj = ob => {
  // The object which contains the
  // final result
  const result = {};

  // loop through the object "ob"
  for (const i in ob) {
    // We check the type of the i using
    // typeof() function and recursively
    // call the function again
    if (typeof ob[i] === 'object' && !Array.isArray(ob[i])) {
      const temp = flattenObj(ob[i]);
      for (const j in temp) {
        // Store temp in result
        result[`${i}.${j}`] = temp[j];
      }
    }

    // Else store ob[i] in result directly
    else {
      result[i] = ob[i];
    }
  }
  return result;
};

const mappedIndicators = rawIndicators.map(rawIndicator => {
  return {
    _id: Math.random(),
    fields: { ...flattenObj(rawIndicator) },
  };
});

const Index = () => {
  const [indicators, setIndicators] = useState(mappedIndicators);

  return (
    <IndicatorsContext.Provider value={{ indicators, setIndicators }}>
      <ThreatIntelligenceLayout>
        <IndicatorsTable />
      </ThreatIntelligenceLayout>
    </IndicatorsContext.Provider>
  );
};

export default Index;
