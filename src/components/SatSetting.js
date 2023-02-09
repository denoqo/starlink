import React, {Component} from "react";
import {Form, Button, InputNumber} from 'antd';

class SatSetting extends Component {
    showSatellite = values => {
        console.log('Received value of form: ', values);
        this.props.onShow(values);
    }

    render () {
        return (
           <Form name='wrap'
                 labelCol={{
                     flex: '110px'
                 }}
                 labelAlign="left"
                 wrapperCol={{
                     flex: 1
                 }}
                 colon={false}
                 className={"sat-setting"}
                 onFinish={this.showSatellite}
           >
               <Form.Item
                   label = "Longitude(degrees)"
                   name="longitude"
                   rules={[
                       {
                           required: true,
                           message: "Please input your Longitude",
                       }
                   ]}
                   initialValue={0}
               >
                   <InputNumber min={-180} max={180}
                                style={{width: "100%"}}
                                placeholder={"Please input Longitude"}
                   />
               </Form.Item>

               <Form.Item
                   label = "Latitude(degrees)"
                   name = "latitude"
                   rules = {[
                       {
                           required: true,
                           message: "Please input your Elevation"
                       }
                   ]}
                   initialValue={0}
               >
                   <InputNumber mim={-90} max={90}
                                style={{width: "100%"}}
                                placeholder={"Please input Latitude"}
                   />
               </Form.Item>

               <Form.Item
                   label="Elevation(meters)"
                   name="elevation"
                   rules={[
                       {
                           required: true,
                           message: "Please input your Elevation",
                       }
                   ]}
                   initialValue={0}
               >
                   <InputNumber min={-413} max={8850}
                                style={{width: "100%"}}
                                placeholder="Please input Longitude"
                   />
               </Form.Item>


               <Form.Item
                   label="Altitude(degrees)"
                   name="altitude"
                   rules={[
                       {
                           required: true,
                           message: "Please input your Altitude",
                       }
                   ]}
                   initialValue={90}
               >
                   <InputNumber min={0} max={90}
                                style={{width: "100%"}}
                                placeholder="Please input Altitude"
                   />
               </Form.Item>

               <Form.Item
                   label="Duration(Sec)x60 "
                   name="duration"
                   rules={[
                       {
                           required: true,
                           message: "Please input your Duration",
                       }
                   ]}
                   initialValue={50}
               >
                   <InputNumber min={0} max={90}
                                style={{width: "100%"}}
                                placeholder="Please input Duration"
                   />
               </Form.Item>

               <Form.Item className={"show-nearby"}>
                   <Button type={"primary"} htmlType={"submit"} style={{textAlign: "center"}}>
                       Find Satellite
                   </Button>
               </Form.Item>



           </Form>
        )
    }
}

export default SatSetting;