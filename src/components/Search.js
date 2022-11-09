import { Divider, Input, Row, Col } from 'antd';

export default function SearchB({ data, setHide }) {
  function onSearch(value) {
    if (!value) {
      setHide([]);
      return;
    }
    setHide(
      data.reduce((acc, { name }, index) => {
        if (!name.toLowerCase().includes(value.toLowerCase())) {
          acc.push(index);
        }
        return acc;
      }, [])
    );
  }
  return (
    <Row>
      <Col offset={4} span={16}>
        <Divider>Search</Divider>
        <Input.Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{
            width: '100%',
          }}
        />
      </Col>
    </Row>
  );
}
