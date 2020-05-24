import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjectDetail } from '../../store/actions/projectActions';

class ProjectDetails extends Component {

  componentDidMount() {
    this.props.getProjectDetail(this.props.match.params.id); 
  }
  
  render() {
    const { project } = this.props;
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>22nd may 2020</div>
          </div>
        </div>
      </div>
    );
   
  }
}

const mapStateToProps = (state) => {
  return {
    project: state.projectx.projectReducerdakiArrayOne,
  };
};
export default connect(mapStateToProps, { getProjectDetail })(ProjectDetails);
