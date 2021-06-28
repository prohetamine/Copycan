import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Route, useHistory, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import queryString from 'query-string'

import Logo from './../components/logo.js'
import Input from './../components/input.js'
import Navigation from './../components/navigation.js'
import LinkButton from './../components/link-button.js'
import Button from './../components/button.js'
import Checkbox from './../components/checkbox.js'
import Prohetamine from './../components/prohetamine.js'

const Body = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  ${
    props => props.isHeight
      ? `padding-bottom: 61px;`
      : `height: 500px;`
  }
`

const TreeTabSettings = ({ location }) => {
  const store = useSelector(store => store)
  const dispatch = useDispatch()

  const { title, settings } = store.trees.find(tree => tree.id === store.currentId)

  return (
    <Body isHeight={true}>
      <Logo />
      <Navigation />
      <Input
        color='blue'
        value={title}
        placeholder='Название доски...'
        style={{ marginBottom: '17px' }}
        onChange={
          ({ target: { value } }) => dispatch({ type: 'title', payload: { id: store.currentId, value } })
        }
      />
      <>
        <Button
          onClick={
            () =>
              dispatch({
                type: 'update-urls',
                payload: {
                  id: store.currentId,
                  urls: [...settings.urls, '']
                }
              })
          }
          color='blue'
          icon='plus'
          style={{ marginBottom: '17px' }}
        >
          Отправлять по url
        </Button>
        {
          settings.urls.map((li, key) => (
            <Input
              key={key}
              color='blue'
              value={li}
              placeholder='https://url?text=copycan'
              style={{ marginBottom: '17px' }}
              onBlur={
                () =>
                  dispatch({
                    type: 'update-urls',
                    payload: {
                      id: store.currentId,
                      urls: settings.urls.filter(url => url.length !== 0)
                    }
                  })
              }
              onChange={
                ({ target: { value } }) =>
                  dispatch({
                    type: 'update-urls',
                    payload: {
                      id: store.currentId,
                      urls: settings.urls.map((url, _key) => _key === key ? value : url)
                    }
                  })
              }
            />
          ))
        }
        <Button
          onClick={() => dispatch({ type: 'eye-content-settings', payload: { id: store.currentId } })}
          color='blue'
          icon='eye'
          style={{ marginBottom: '17px' }}
        >
          Удалять содержимое
        </Button>
        {
          settings.eye_content_settings
            ? (
              <>
                <Checkbox
                  value={settings.content_delete === false}
                  onClick={() => dispatch({ type: 'content-delete', payload: { time: false, id: store.currentId } })}
                  color='blue'
                  style={{ marginBottom: '17px' }}
                >
                  Не удалять
                </Checkbox>
                <Checkbox
                  value={settings.content_delete === 3600000}
                  onClick={() => dispatch({ type: 'content-delete', payload: { time: 3600000, id: store.currentId } })}
                  color='blue'
                  style={{ marginBottom: '17px' }}
                >
                  Через 1 час
                </Checkbox>
                <Checkbox
                  value={settings.content_delete === 18000000}
                  onClick={() => dispatch({ type: 'content-delete', payload: { time: 18000000, id: store.currentId } })}
                  color='blue'
                  style={{ marginBottom: '17px' }}
                >
                  Через 5 часов
                </Checkbox>
                <Checkbox
                  value={settings.content_delete === 86400000}
                  onClick={() => dispatch({ type: 'content-delete', payload: { time: 86400000, id: store.currentId } })}
                  color='blue'
                  style={{ marginBottom: '17px' }}
                >
                  На следующий день
                </Checkbox>
              </>
            )
            : (
              null
            )
        }
        <Button
          onClick={() => dispatch({ type: 'eye-options-copy', payload: { id: store.currentId } })}
          color='blue'
          icon='eye'
          style={{ marginBottom: '17px' }}
        >
          Опции копирования
        </Button>
        {
          settings.eye_options_copy
            ? (
              <>
                <Checkbox
                  value={settings.save_time}
                  onClick={() => dispatch({ type: 'save-time', payload: { id: store.currentId } })}
                  color='blue'
                  style={{ marginBottom: '17px' }}
                >
                  Сохранять время
                </Checkbox>
                <Checkbox
                  value={settings.save_date}
                  onClick={() => dispatch({ type: 'save-date', payload: { id: store.currentId } })}
                  color='blue'
                  style={{ marginBottom: '17px' }}
                >
                  Сохранять дату
                </Checkbox>
                <Checkbox
                  value={settings.save_link}
                  onClick={() => dispatch({ type: 'save-link', payload: { id: store.currentId } })}
                  color='blue'
                  style={{ marginBottom: '17px' }}
                >
                  Сохранять ссылку
                </Checkbox>
                <Checkbox
                  value={settings.cancel_event}
                  onClick={() => dispatch({ type: 'cancel-event', payload: { id: store.currentId } })}
                  color='blue'
                  style={{ marginBottom: '17px' }}
                >
                  Уведомление отмены
                </Checkbox>
                <Checkbox
                  value={settings.from_tree}
                  onClick={() => dispatch({ type: 'from-tree', payload: { id: store.currentId } })}
                  color='blue'
                  style={{ marginBottom: '17px' }}
                >
                 Подписывать отправляемые
                </Checkbox>
              </>
            )
            : (
              null
            )
        }
      </>
      <Prohetamine />
    </Body>
  )
}

export default TreeTabSettings
