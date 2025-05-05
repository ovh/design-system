import { Table } from '.';
import style from './dev.module.css';

export default {
  component: Table,
  title: 'Table dev',
};

export const Default = () => (
  <Table>
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
  </Table>
);

export const Size = () => (
  <>
    <Table size="sm">
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
    </Table>
    <Table size="md">
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
    </Table>
    <Table size="lg">
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
    </Table>
  </>
);

export const Variant = () => (
  <div style={ { display: 'flex', gap: '1rem' } }>
    <Table variant="default">
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
    </Table>
    <Table variant="striped">
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
    </Table>
  </div>
);

export const CustomStyle = () => (
  <Table className={ style[ 'custom-table' ] }>
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
  </Table>
);
