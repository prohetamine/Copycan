import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Route, useHistory } from 'react-router-dom'
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
  const { trees, settings } = JSON.parse(window.localStorage.data)
  const [actionGlobalSettings, setGlobalSettings]     = useState(settings.action_global_settings)
      , [actionContentSettings, setContentSettings]   = useState(settings.action_content_settings)
      , [actionsOptionsCopy, setOptionsCopy]          = useState(settings.action_options_copy)
      , [linkInput, setLinkInput]                     = useState(settings.urls)
      , [actionContentDelete, setContentDelete]       = useState(settings.content_delete)
      , [actionsTimeSave, setTimeSave]                = useState(settings.save_time)
      , [actionsDateSave, setDateSave]                = useState(settings.save_date)
      , [actionsLinkSave, setLinkSave]                = useState(settings)
      , [list, setList]                               = useState(trees)

  useEffect(() => {
    const { trees, settings } = JSON.parse(window.localStorage.data)

    const update = {
      urls:  linkInput,
      content_delete: actionContentDelete,
      save_time: actionsTimeSave,
      save_date: actionsDateSave,
      save_link: actionsLinkSave,
      action_global_settings: actionGlobalSettings,
      action_content_settings: actionContentSettings,
      action_options_copy: actionsOptionsCopy
    }

    window.localStorage.data = JSON.stringify({
      trees: list,
      settings: {
        ...settings,
        ...update
      }
    })
  }, [
    list.length,
    linkInput.map(l => l.length).join('+'),
    actionContentDelete,
    actionsTimeSave,
    actionsDateSave,
    actionsLinkSave,
    actionGlobalSettings,
    actionContentSettings,
    actionsOptionsCopy
  ])

  return (
    <Body isHeight={list.length + (actionGlobalSettings ? 3 : 0) >= 2}>
      <Logo />
      <Navigation />
      <Button
        onClick={() => setGlobalSettings(s => !s)}
        color='blue'
        icon='eye'
        style={{ marginBottom: '17px' }}
      >
        Глобальные настройки
      </Button>
      {
        actionGlobalSettings
          ? (
            <>
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
            </>
          )
          : (
            null
          )
      }
      {
        list.map(({ id, title }, key) => (
          <LinkButton
            key={key}
            to={`/tree-tab-settings/${id}/?to=true`}
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
