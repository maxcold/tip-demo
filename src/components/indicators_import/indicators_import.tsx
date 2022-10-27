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
import { useState } from 'react';

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
  }
];

export const IndicatorsImport = () => {
  const modalFormId = useGeneratedHtmlId({ prefix: 'modalForm' });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOptions, setSelected] = useState([options[0]]);
  const closeModal = () => setIsModalVisible(false);
  const openModal = () => setIsModalVisible(true);
  const onChange = (selectedOptions: any) => {
    setSelected(selectedOptions);
  };

  const form = (
    <EuiForm id={modalFormId} component={'form'}>
      <EuiFormRow>
        <EuiComboBox
          prepend="STIX Type"
          singleSelection={{ asPlainText: true }}
          placeholder="Select a type"
          options={options}
          selectedOptions={selectedOptions}
          onChange={onChange}
        />
      </EuiFormRow>
      <EuiFormRow label="Indicators" helpText="One indicator per line">
        <EuiTextArea />
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

        <EuiButton type="submit" form={modalFormId} onClick={closeModal} fill>
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
