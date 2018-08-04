import React from 'react';

export default class searchResultList extends React.Component {



  render() {
    return (
      <ul>
        {this.props.list.map(topic => (
          <li key={topic.data.title}>
            {topic.data.title}
          </li>
        ))}
      </ul> 
    );
  }

}
 
 


/*Should inherit all search results through props

This component does not need to have its own state

If there are topics in the application state it should display an unordered list

Each list item in the unordered list should contain the following

an anchor tag with a href to the topic.url

inside the anchor a heading tag with the topic.title

inside the anchor a p tag with the number of topic.ups */


