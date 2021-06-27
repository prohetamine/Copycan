import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Route, useHistory, useLocation } from 'react-router-dom'
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

const TreeListSettings = ({ location }) => {
  const { trees } = JSON.parse(window.localStorage.data)

  const id = location.match.params.id
      , { settings, title } = trees.find(tree => tree.id === id)

  const [actionGlobalSettings, setGlobalSettings]     = useState(settings.action_global_settings)
      , [actionContentSettings, setContentSettings]   = useState(settings.action_content_settings)
      , [actionsOptionsCopy, setOptionsCopy]          = useState(settings.action_options_copy)
      , [linkInput, setLinkInput]                     = useState(settings.urls)
      , [actionContentDelete, setContentDelete]       = useState(settings.content_delete)
      , [actionsTimeSave, setTimeSave]                = useState(settings.save_time)
      , [actionsDateSave, setDateSave]                = useState(settings.save_date)
      , [actionsLinkSave, setLinkSave]                = useState(settings.save_link)
      , [_title, setTitle]                            = useState(title)

  useEffect(() => {
    const { trees, settings } = JSON.parse(window.localStorage.data)

    window.localStorage.data = JSON.stringify({
      trees: trees.map(
              tree =>
                tree.id === id
                  ? ({
                      ...tree,
                      title: _title,
                      settings: {
                        urls: linkInput,
                        content_delete: actionContentDelete,
                        save_time: actionsTimeSave,
                        save_date: actionsDateSave,
                        save_link: actionsLinkSave,
                        action_global_settings: actionGlobalSettings,
                        action_content_settings: actionContentSettings,
                        action_options_copy: actionsOptionsCopy
                      }
                    })
                  : tree
             ),
      settings
    })
  }, [
    linkInput.map(l => l.length).join('+'),
    actionContentDelete,
    actionsTimeSave,
    actionsDateSave,
    actionsLinkSave,
    actionGlobalSettings,
    actionContentSettings,
    actionsOptionsCopy,
    id,
    _title
  ])

  return (
    <Body isHeight={true}>
      <Logo />
      <Navigation />
      <Input
        color='blue'
        value={_title}
        placeholder='Название доски...'
        style={{ marginBottom: '17px' }}
        onChange={
          ({ target: { value } }) => setTitle(value)
        }
      />
      <Button
        onClick={() => setLinkInput(s => [...s, ''])}
        color='blue'
        icon='plus'
        style={{ marginBottom: '17px' }}
      >
        Отправлять по url
      </Button>
      {
        linkInput.map((li, key) => (
          <Input
            key={key}
            color='blue'
            value={li}
            placeholder='https://url?text=copycan'
            style={{ marginBottom: '17px' }}
            onBlur={
              () =>
                setLinkInput(
                  lis =>
                    lis.filter(li => li.length !== 0)
                )
            }
            onChange={
              ({ target: { value } }) =>
                setLinkInput(
                  lis =>
                    lis.map((li, _key) => _key === key ? value : li)
                )
            }
          />
        ))
      }
      <Button
        onClick={() => setContentSettings(s => !s)}
        color='blue'
        icon='eye'
        style={{ marginBottom: '17px' }}
      >
        Удалять содержимое
      </Button>
      {
        actionContentSettings
          ? (
            <>
              <Checkbox
                value={actionContentDelete === false}
                onClick={() => setContentDelete(s => false)}
                color='blue'
                style={{ marginBottom: '17px' }}
              >
                Не удалять
              </Checkbox>
              <Checkbox
                value={actionContentDelete === '3600000'}
                onClick={() => setContentDelete(s => '3600000')}
                color='blue'
                style={{ marginBottom: '17px' }}
              >
                Через 1 час
              </Checkbox>
              <Checkbox
                value={actionContentDelete === '18000000'}
                onClick={() => setContentDelete(s => '18000000')}
                color='blue'
                style={{ marginBottom: '17px' }}
              >
                Через 5 часов
              </Checkbox>
              <Checkbox
                value={actionContentDelete === '86400000'}
                onClick={() => setContentDelete(s => '86400000')}
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
        onClick={() => setOptionsCopy(s => !s)}
        color='blue'
        icon='eye'
        style={{ marginBottom: '17px' }}
      >
        Опции копирования
      </Button>
      {
        actionsOptionsCopy
          ? (
            <>
              <Checkbox
                value={actionsTimeSave}
                onClick={() => setTimeSave(s => !s)}
                color='blue'
                style={{ marginBottom: '17px' }}
              >
                Сохранять время
              </Checkbox>
              <Checkbox
                value={actionsDateSave}
                onClick={() => setDateSave(s => !s)}
                color='blue'
                style={{ marginBottom: '17px' }}
              >
                Сохранять дату
              </Checkbox>
              <Checkbox
                value={actionsLinkSave}
                onClick={() => setLinkSave(s => !s)}
                color='blue'
                style={{ marginBottom: '17px' }}
              >
                Сохранять ссылку
              </Checkbox>
            </>
          )
          : (
            null
          )
      }
      <Prohetamine />
    </Body>
  )
}

export default TreeListSettings
