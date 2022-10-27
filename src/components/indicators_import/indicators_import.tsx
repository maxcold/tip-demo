/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import {
  EuiButton,
  EuiModal,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiModalBody,
  EuiModalFooter,
  EuiButtonEmpty,
  useGeneratedHtmlId,
  EuiForm,
  EuiFormRow,
  EuiComboBox,
  EuiTextArea,
} from '@elastic/eui';
import { useContext, useState } from 'react';
import { IndicatorsContext } from '../../context/indicators';

const options = [
  {
    label: 'file',
  },
  {
    label: 'ipv4-addr',
  },
  {
    label: 'ipv6-addr',
  },
  {
    label: 'url',
  },
  {
    label: 'domain-name',
  },
  {
    label: 'email-addr',
  },
  {
    label: 'email-message',
  },
  {
    label: 'x509-certificate',
  },
  {
    label: 'windows-registry-key',
  },
  {
    label: 'autonomous-system',
  },
  {
    label: 'mac-addr',
  },
  {
    label: 'artifact',
  },
  {
    label: 'directory',
  },
  {
    label: 'mutex',
  },
  {
    label: 'network-traffic',
  },
  {
    label: 'process',
  },
  {
    label: 'software',
  },
  {
    label: 'user-account',
  },
];

export const IndicatorsImport = () => {
  const { indicators, setIndicators } = useContext(IndicatorsContext);
  const modalFormId = useGeneratedHtmlId({ prefix: 'modalForm' });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedType, setSelectedType] = useState([options[0]]);
  const [indicatorsToImport, setIndicatorsToImport] = useState('');
  const closeModal = () => setIsModalVisible(false);
  const openModal = () => setIsModalVisible(true);
  const onTypeChange = (selectedOptions: any) => {
    setSelectedType(selectedOptions);
  };
  const onIndicatorsToImportChange = (e: any) => {
    setIndicatorsToImport(e.target.value);
  };
  const onImport = () => {
    const type = selectedType[0].label;
    const indicatorsToImportArr = indicatorsToImport.split('\n');
    let key;

    switch (type) {
      case 'file':
        key = 'threat.indicator.file.hash.sha256';
        break;
      case 'ipv4-addr':
        key = 'threat.indicator.ip';
        break;
      case 'ipv6-addr':
        key = 'threat.indicator.ip';
        break;
      case 'url':
        key = 'threat.indicator.url.full';
        break;
      case 'domain-name':
        key = 'threat.indicator.domain';
        break;
      case 'email-addr':
        key = 'threat.indicator.email.address';
        break;
      case 'email-message':
        key = 'threat.indicator.email.message_id';
        break;
      case 'x509-certificate':
        key = 'threat.indicator.x509_certificate.serial_number';
        break;
      case 'windows-registry-key':
        key = 'threat.indicator.registry_data.key';
        break;
      case 'autonomous-system':
        key = 'threat.indicator.as.number';
        break;
      case 'mac-addr':
        key = 'threat.indicator.mac';
        break;
      case 'artifact':
        key = 'threat.indicator.artifact.hash.sha256';
        break;
      case 'directory':
        key = 'threat.indicator.directory.path';
        break;
      case 'mutex':
        key = 'threat.indicator.mutex.name';
        break;
      case 'network-traffic':
        key = 'threat.indicator.network_traffic.endpoint';
        break;
      case 'process':
        key = 'threat.indicator.process.hash.sha256';
        break;
      case 'software':
        key = 'threat.indicator.software.hash.sha256';
        break;
      case 'user-account':
        key = 'threat.indicator.user.name';
        break;
    }

    const newIndicators = indicatorsToImportArr.map(indicator => {
      return {
        _id: Math.random(),
        fields: {
          'threat.indicator.type': type,
          'threat.feed.name': 'Imported',
          '@timestamp': new Date().toISOString(),
          'threat.indicator.name': indicator,
          [key]: indicator,
        },
      };
    });

    setIndicators([...indicators, ...newIndicators]);

    closeModal();
  };

  const form = (
    <EuiForm id={modalFormId} component={'form'}>
      <EuiFormRow>
        <EuiComboBox
          prepend="STIX Type"
          singleSelection={{ asPlainText: true }}
          placeholder="Select a type"
          options={options}
          selectedOptions={selectedType}
          onChange={onTypeChange}
        />
      </EuiFormRow>
      <EuiFormRow label="Indicators" helpText="One indicator per line">
        <EuiTextArea
          value={indicatorsToImport}
          onChange={onIndicatorsToImportChange}
        />
      </EuiFormRow>
    </EuiForm>
  );
  const modal = isModalVisible ? (
    <EuiModal onClose={closeModal} initialFocus="[name=popswitch]">
      <EuiModalHeader>
        <EuiModalHeaderTitle>
          <h1>Import indicators</h1>
        </EuiModalHeaderTitle>
      </EuiModalHeader>

      <EuiModalBody>{form}</EuiModalBody>

      <EuiModalFooter>
        <EuiButtonEmpty onClick={closeModal}>Cancel</EuiButtonEmpty>

        <EuiButton type="submit" form={modalFormId} onClick={onImport} fill>
          Import
        </EuiButton>
      </EuiModalFooter>
    </EuiModal>
  ) : undefined;

  return (
    <>
      <EuiButton color="primary" iconType="indexOpen" onClick={openModal}>
        Import
      </EuiButton>
      {modal}
    </>
  );
};
