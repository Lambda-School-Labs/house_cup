import React, { Component } from 'react';
import CreateSchool from './components/CreateSchool';
import Gateway from '../Gateway/Gateway';

class CreateSchoolView extends Component {

  render() {
    const gatewayProps = {
      allow: [
        'none',
      ],
      redirect: {
        teacher: '/scoreboard',
        schoolAdmin: '/dashboard',
        superAdmin: '/schools/list',
      },
    };

    return (
      <Gateway {...gatewayProps}>
        <div className="CreateSchoolView">
          <CreateSchool />
        </div>
      </Gateway>
    );
  }

}

export default CreateSchoolView;