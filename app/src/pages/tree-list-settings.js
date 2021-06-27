import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Route, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'

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

const TreeListSettings = () => {
  const store = useSelector(store => store)
  const dispatch = useDispatch()

  return (
    <Body isHeight={store.trees.length + (store.settings.eye_global_settings ? 3 : 0) >= 2}>
      <Logo />
      <Navigation />
      <Button
        onClick={() => dispatch({ type: 'eye-global-settings' })}
        color='blue'
        icon='eye'
        style={{ marginBottom: '17px' }}
      >
        Глобальные настройки
      </Button>
      {
        store.settings.eye_global_settings
          ? (
            <>
              <Button
                onClick={
                  () =>
                    dispatch({
                      type: 'update_urls',
                      payload: [...store.settings.urls, '']
                    })
                }
                color='blue'
                icon='plus'
                style={{ marginBottom: '17px' }}
              >
                Отправлять по url
              </Button>
              {
                store.settings.urls.map((li, key) => (
                  <Input
                    key={key}
                    color='blue'
                    value={li}
                    placeholder='https://url?text=copycan'
                    style={{ marginBottom: '17px' }}
                    onBlur={
                      () =>
                        dispatch({
                          type: 'update_urls',
                          payload: store.settings.urls.filter(url => url.length !== 0)
                        })
                    }
                    onChange={
                      ({ target: { value } }) =>
                        dispatch({
                          type: 'update_urls',
                          payload: store.settings.urls.map((url, _key) => _key === key ? value : url)
                        })
                    }
                  />
                ))
              }
              <Button
                onClick={() => dispatch({ type: 'eye-content-settings' })}
                color='blue'
                icon='eye'
                style={{ marginBottom: '17px' }}
              >
                Удалять содержимое
              </Button>
              {
                store.settings.eye_content_settings
                  ? (
                    <>
                      <Checkbox
                        value={store.settings.content_delete === false}
                        onClick={() => dispatch({ type: 'content-delete', payload: false })}
                        color='blue'
                        style={{ marginBottom: '17px' }}
                      >
                        Не удалять
                      </Checkbox>
                      <Checkbox
                        value={store.settings.content_delete === 3600000}
                        onClick={() => dispatch({ type: 'content-delete', payload: 3600000 })}
                        color='blue'
                        style={{ marginBottom: '17px' }}
                      >
                        Через 1 час
                      </Checkbox>
                      <Checkbox
                        value={store.settings.content_delete === 18000000}
                        onClick={() => dispatch({ type: 'content-delete', payload: 18000000 })}
                        color='blue'
                        style={{ marginBottom: '17px' }}
                      >
                        Через 5 часов
                      </Checkbox>
                      <Checkbox
                        value={store.settings.content_delete === 86400000}
                        onClick={() => dispatch({ type: 'content-delete', payload: 86400000 })}
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
                onClick={() => dispatch({ type: 'eye-options-copy' })}
                color='blue'
                icon='eye'
                style={{ marginBottom: '17px' }}
              >
                Опции копирования
              </Button>
              {
                store.settings.eye_options_copy
                  ? (
                    <>
                      <Checkbox
                        value={store.settings.save_time}
                        onClick={() => dispatch({ type: 'save-time' })}
                        color='blue'
                        style={{ marginBottom: '17px' }}
                      >
                        Сохранять время
                      </Checkbox>
                      <Checkbox
                        value={store.settings.save_date}
                        onClick={() => dispatch({ type: 'save-date' })}
                        color='blue'
                        style={{ marginBottom: '17px' }}
                      >
                        Сохранять дату
                      </Checkbox>
                      <Checkbox
                        value={store.settings.save_link}
                        onClick={() => dispatch({ type: 'save-link' })}
                        color='blue'
                        style={{ marginBottom: '17px' }}
                      >
                        Сохранять ссылку
                      </Checkbox>
                      <Checkbox
                        value={store.settings.ctrl_Cx3}
                        onClick={() => dispatch({ type: 'ctrl-Cx3' })}
                        color='blue'
                        style={{ marginBottom: '17px' }}
                      >
                        Ctrl + C x3
                      </Checkbox>
                    </>
                  )
                  : (
                    null
                  )
              }
            </>
          )
          : (
            null
          )
      }
      {
        store.trees.map(({ id, title }, key) => (
          <LinkButton
            key={key}
            onClick={() => dispatch({ type: 'current-id', payload: id })}
            to='/tree-tab-settings?to=true'
            color='blue'
            icon='arrow'
            style={{ marginBottom: '17px' }}
          >
            {title}
          </LinkButton>
        ))
      }
      <Prohetamine />
    </Body>
  )
}

export default TreeListSettings
