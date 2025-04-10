import { OdsTable } from '../../src';

export default {
  component: OdsTable,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <OdsTable
    data-testid="custom-style"
    style={{ backgroundColor: 'red' }}>
  <caption>
    Front-end web developer course 2021
  </caption>
  <thead>
  <tr>
    <th scope="col">Person</th>
    <th scope="col">Most interest in</th>
    <th scope="col">Age</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <th scope="row">Chris</th>
    <td>HTML tables</td>
    <td>22</td>
  </tr>
  <tr>
    <th scope="row">Dennis</th>
    <td>Web accessibility</td>
    <td>45</td>
  </tr>
  <tr>
    <th scope="row">Sarah</th>
    <td>JavaScript frameworks</td>
    <td>29</td>
  </tr>
  <tr>
    <th scope="row">Karen</th>
    <td>Web performance</td>
    <td>36</td>
  </tr>
  </tbody>
</OdsTable>
);

export const render = () => (
  <OdsTable data-testid="render">
  <caption>
    Front-end web developer course 2021
  </caption>
  <thead>
  <tr>
    <th scope="col">Person</th>
    <th scope="col">Most interest in</th>
    <th scope="col">Age</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <th scope="row">Chris</th>
    <td>HTML tables</td>
    <td>22</td>
  </tr>
  <tr>
    <th scope="row">Dennis</th>
    <td>Web accessibility</td>
    <td>45</td>
  </tr>
  <tr>
    <th scope="row">Sarah</th>
    <td>JavaScript frameworks</td>
    <td>29</td>
  </tr>
  <tr>
    <th scope="row">Karen</th>
    <td>Web performance</td>
    <td>36</td>
  </tr>
  </tbody>
  </OdsTable>
);
