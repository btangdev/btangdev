import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import * as firebase from 'firebase';

class UploadButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: ''
        }

        this.onFileUpload = this.onFileUpload.bind(this);       
    }

    onFileUpload(e) {
        console.log('**** AUTH: ' + firebase.auth().currentUser.uid);
        // Get file
        var file = e.target.files[0];
        
        // create a storage ref
        var storageRef = firebase.storage().ref('thumbnail/' + file.name);

        // Upload file
        var task = storageRef.put(file);

        task.on('state_changed',
            function(snapshot) {
            //     var percentage = ( snapshot.bytesTransferred / snapshot.totlaBytes ) * 100;
            //     uploader.value = percentage;
            },
            function(error) {},
            function() {                
                var postKey = firebase.database().ref('Posts/').push().key;
                var downloadURL = task.snapshot.downloadURL;
                var updates = {};
                var postData = {
                    url: downloadURL,
                    caption: 'test',
                    user: firebase.auth().currentUser.uid
                }
                updates['/Posts/'+postKey] = postData;
                firebase.database().ref().update(updates);                
            }
        );        
    }

    componentDidMount() {
        const rootRef = firebase.database().ref('Posts/');
        // const postsRef = rootRef.child('Posts/'+firebase.auth().currentUser.uid);
// console.log('==========================' + firebase.auth().currentUser.uid);
        rootRef.on('value', data => {
            // console.log('@@@VALUE:: ' + data.val().postKey)
        });
    }

    render() {
        const fileUpload = {
            zIndex: -1,position: 'relative',width: '0.1px',height: '0.1px'
        };
        return(
            <div>
                <FloatingActionButton containerElement='label' label='My Label'>
                    {<input type="file" style={fileUpload} onChange={this.onFileUpload} />}
                    <ContentAdd />
                </FloatingActionButton>

                <img src="" alt=""/>
            </div>
        );
    }
}

export default UploadButton;