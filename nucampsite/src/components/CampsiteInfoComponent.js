import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            name: 'name',

            description: 'description'

        };
    }
     renderCampsite(campsite) {
            return (
                <div className='col-md-5 m-1'>
                    <Card>
                        <CardImg top src={this.props.campsite.image} alt={this.name} />
                        <CardBody>
                                <CardTitle>{this.props.campsite.name}</CardTitle>
                                <CardText>{this.props.campsite.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
    }

    renderComments(comments) {
        if (comments) {
            return (
              <div className='col-md-5 m-1'>
                  <h4>Comments</h4>
                  {comments.map(comment => <div key={comment.id} 
                  text={comment.text}
                  author={comment.author} date={comment.author}>
                  </div>)}
            </div> 
            );   
            } else {
                return (
                    <div>
                        
                    </div>
                );
            }
    }
    

        
    render() {
        if (this.props.campsite) {
            return (
                <div className='row'>
                   {this.renderCampsite()}
                   {this.renderComments([])}
                </div>
            );

        } else {
            return (
                <div>
                    
                </div>
            );
        }
     
    }
}

export default CampsiteInfo;



