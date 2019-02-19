import React, { Component } from 'react'
import { Emoji } from 'emoji-mart'
import styled from '@emotion/styled'
import _ from 'lodash'

import { config } from '../config/config'

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #222;
  color: #fefefe;
  // font-family: 'Press Start 2P';
  font-family: 'Roboto Mono', monospace;
  padding: 0 14vw;
`

const H1 = styled.h1`
  margin: 0 0 20px 0;
`

const List = styled.ul`
  max-width: 416px;
  list-style: none;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  position: relative;

  &::before {
    content: '>>';
    display: block;
    font-size: 0.8em;
    position: absolute;
    top: 0.2em;
    left: -35px;
    color: transparent;
  }

  &:hover,
  &:focus,
  &:active {
    color: magenta;
    outline: none;

    &::before {
      color: magenta;
    }
  }
`

const ListItemHeading = styled.h2`
  display: ${props => (props.isHidden ? 'none' : 'flex')};
  align-items: center;
  position: relative;
  font-size: 16px;
  margin: 8px 0;
`

const ListItemHeadingName = styled.div`
  margin-left: 20px;
`

const ListItemImageWrapper = styled.div`
  width: 100%;
  padding: 10px 0;

  img {
    width: 100%;
  }
`

const ListItemDescription = styled.p`
  font-family: 'Roboto Mono';
  font-size: 0.9em;
  line-height: 1.5;
  padding: 10px 0;
  margin: 0;
  color: #fefefe;

  &:hover,
  &:focus,
  &:active {
    color: magenta;
    outline: none;

    &::before {
      color: magenta;
    }
  }
`

export class MyWorkToolsPage extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch(config.api)
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: _.sortBy(json, 'name')
        })
      })
  }

  handleItemClick = (itemName, isSelected) => {
    if (isSelected) {
      this.setState(prevState => ({
        data: prevState.data.map(item => {
          return {
            ...item,
            isSelected: false,
            isHidden: false
          }
        })
      }))
    } else {
      this.setState(prevState => ({
        data: prevState.data.map(item => {
          if (item.name === itemName) {
            return {
              ...item,
              isSelected: true,
              isHidden: false
            }
          }
          return {
            ...item,
            isSelected: false,
            isHidden: true
          }
        })
      }))
    }
  }

  handleItemKeyPress = (event, itemName, isSelected) => {
    const key = event.key

    if (key === 'Enter') {
      this.handleItemClick(itemName, isSelected)
    }
  }

  getEmojiFromCategory = category => {
    switch (category) {
      case 'Programming':
        return 'computer'
      case 'Productivity':
        return 'robot_face'
      case 'Security':
        return 'closed_lock_with_key'
      case 'System Tools':
        return 'floppy_disk'
      default:
        return 'santa'
    }
  }

  render() {
    return (
      <Main>
        <List>
          <H1>My Work Tools</H1>

          {this.state.data &&
            this.state.data.map(item => (
              <ListItem
                key={item.name}
                tabIndex="0"
                onClick={() => this.handleItemClick(item.name, item.isSelected)}
                onKeyPress={e =>
                  this.handleItemKeyPress(e, item.name, item.isSelected)
                }
              >
                <ListItemHeading isHidden={item.isHidden}>
                  <Emoji
                    emoji={`${this.getEmojiFromCategory(item.category)}`}
                    size={24}
                  />
                  <ListItemHeadingName>{item.name}</ListItemHeadingName>
                </ListItemHeading>

                {item.isSelected && (
                  <>
                    <ListItemImageWrapper>
                      <img src={`img/${item.imageUrl}.png`} alt="" />
                    </ListItemImageWrapper>
                    <ListItemDescription tabIndex="0">
                      {item.description}
                    </ListItemDescription>
                  </>
                )}
              </ListItem>
            ))}
        </List>
      </Main>
    )
  }
}
