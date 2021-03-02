import React from 'react';
import { Button, Col, Divider, Row, Typography } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export const Escritorio = () => {

    const salir = () => {

        console.log('salir')

    }
    
    const siguienteTicket = () => {

console.log('Siguiente ticket')

    }

    return (
        <>
            <Row>
                <Col span={20}>
                    <Title level={2}>Fernando</Title>
                    <Text>Usted está trabajando en el escritorio: </Text>
                    <Text type="success">  5</Text>
                </Col>
                <Col span={4}>
                    <Button
                        shape="round"
                        type="danger"
                        onClick={salir}
                    >
                        <CloseCircleOutlined />
                        Salir
                    </Button>
                </Col>
            </Row>
            <Divider />
                <Row>
                    <Col>
                        <Text>Está atendiendo el ticket número: </Text>
                        <Text style={{ fontSize: 30 }} type="danger"> 55</Text>
                    </Col>
                </Row>
                <Row>
                    <Col offset={18} span={6} aling="right" >
                        <Button
                            shape="round"
                             type="primary"                          
                            onClick={siguienteTicket}
                        >
                            Siguiente
                            <RightOutlined />
                        </Button>
                    </Col>
                </Row>

  
        </>
    )
}
