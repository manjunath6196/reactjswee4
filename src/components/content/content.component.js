import React from 'react';
import ContentItem from '../../components/content-item/content-item.component';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections :[
                {                    
                    imageUrl :'https://images.unsplash.com/photo-1590555659238-ceb4e878e33d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGdpcmwlMjBpbWFnZSUyMHNpemUlMjBoZWlnaHQlM0QyNzN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    id:0,                    
                },
                {   
                   imageUrl : 'https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fG1hbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                   id:1,
                },
                {   
                    imageUrl:'https://images.unsplash.com/photo-1599140781162-68659a79e313?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlJTIwc2l6ZSUyMGhlaWdodCUzRDI3M3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    id:2,

                },
                {                    
                    imageUrl :'https://images.unsplash.com/photo-1559548331-f9cb98001426?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwaW1hZ2UlMjBoZWlnaHQlM0QyNzN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    id:3,                    
                },
                {   
                   imageUrl : 'https://images.unsplash.com/photo-1592755219588-d4ff92a0d4de?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGdpcmwlMjBpbWFnZSUyMHNpemUlMjBoZWlnaHQlM0QyNzN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                   id:4,
                },
                {   
                    imageUrl:'https://images.unsplash.com/photo-1482961674540-0b0e8363a005?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bWFuJTIwaW1hZ2UlMjBoZWlnaHQlM0QyNzN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    id:5,

                },
                {                    
                    imageUrl :'https://images.unsplash.com/photo-1591838518165-a7026f15f055?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzB8fGdpcmwlMjBpbWFnZSUyMHNpemUlMjBoZWlnaHQlM0QyNzN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    id:6,                    
                },
                {   
                   imageUrl : 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwaW1hZ2UlMjBoZWlnaHQlM0QyNzN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                   id:7,
                },
                {   
                    imageUrl:'https://images.unsplash.com/photo-1569124589354-615739ae007b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmwlMjBpbWFnZSUyMGhlaWdodCUzRDI3M3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    id:8,

                },
                {                    
                    imageUrl :'https://images.unsplash.com/photo-1592827095305-68f21edefb82?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbiUyMGltYWdlJTIwaGVpZ2h0JTNEMjczfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    id:9,                    
                },
                {                    
                    imageUrl :'https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    id:10,                    
                },
                {                    
                    imageUrl :'https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    id:11,                    
                },
                {                    
                    imageUrl :'https://images.unsplash.com/photo-1570824554952-979bb712d2a7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    id:12,                    
                },
                {                    
                    imageUrl :'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    id:13,                    
                },
                {                    
                    imageUrl :'https://images.unsplash.com/photo-1551292831-023188e78222?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    id:14,                    
                },
                {                    
                    imageUrl :'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    id:15,                    
                },
                {                    
                    imageUrl :'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    id:16,                    
                },
                {                    
                    imageUrl :'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    id:17,                    
                },
                {                    
                    imageUrl :'https://images.unsplash.com/photo-1494708001911-679f5d15a946?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    id:18,                    
                },
                {                    
                    imageUrl :'https://images.unsplash.com/photo-1594300616500-e7932583a3d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjZ8fGZlbWFsZSUyMGltYWdlJTIwaGVpZ2h0JTNEMjc0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    id:19,                    
                },
                {                    
                    imageUrl :'https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    id:20,                    
                },           
            ]
        }
    }
        render()
        {
            return(
                <div className="container">
                     <div className="row">
                    {    
                        this.state.sections.map(({id,imageUrl}) =>(
                        <ContentItem key={id} id={id} imageUrl={imageUrl}/>
                        ) )
                    }
                    </div>
                </div>
            )
        }
    }
export default Content;