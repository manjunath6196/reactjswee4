import React from 'react';
//import Content from '../../components/content/content.component'
import SOCIAL_MEDIA_FRIENDS_DATA from './social_media_friends-data.js'
import FriendsContentItem  from '../../components/content-item/friends-content-1.component';
     
 class FriendsPage extends React.Component {

    //this component will receive index through the url
    
    constructor(props) {      
      super(props);
        console.error("id= ",SOCIAL_MEDIA_FRIENDS_DATA[this.props.match.params.id].friends_sections)
        this.state = {
            collections: SOCIAL_MEDIA_FRIENDS_DATA[this.props.match.params.id].friends_sections           
        }  
    }
    render(){
        const {collections} = this.state;
        return(<div className="friends-page">
            {
                collections.map(({id,title,age,dob,address,socialmedia,lastseen,followers,hobbies,email,education,job,imageUrl}) =>(
                   <FriendsContentItem  key={id} title={title} age={age} dob={dob} address={address} 
                   socialmedia={socialmedia} lastseen={lastseen} followers={followers} hobbies={hobbies} 
                   email={email} education={education} job={job} imageUrl={imageUrl}></FriendsContentItem > 
                ))    

            }
        </div>)
        }
}
export default FriendsPage;

