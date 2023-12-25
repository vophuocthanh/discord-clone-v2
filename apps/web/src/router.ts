// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/blog`
  | `/careers`
  | `/channels/:orgID/:channelID`
  | `/channels/:orgID/channel-browser`
  | `/channels/:orgID/member-safety`
  | `/discover`
  | `/download`
  | `/forgot-password`
  | `/login`
  | `/nitro`
  | `/register`
  | `/reset-password`
  | `/safety`
  | `/servers`
  | `/verify-email-success`

export type Params = {
  '/channels/:orgID/:channelID': { orgID: string; channelID: string }
  '/channels/:orgID/channel-browser': { orgID: string }
  '/channels/:orgID/member-safety': { orgID: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
