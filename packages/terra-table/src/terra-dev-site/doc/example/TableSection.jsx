import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Row, Cell, Section } from 'terra-table/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableRowExample = () => (
  <Table>
    <Section title="Section Title">
      <Row>
        <Cell>
          <Placeholder style={{ height: '50px' }} />
        </Cell>
      </Row>
    </Section>
  </Table>
);

export default TableRowExample;