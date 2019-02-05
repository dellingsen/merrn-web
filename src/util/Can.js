import { createCanBoundTo } from '@casl/react'
import {defineAbilitiesFor} from './Ability'

const authedUser = JSON.parse(sessionStorage.getItem('userToken'));
export default createCanBoundTo(defineAbilitiesFor(authedUser))
