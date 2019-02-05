import { AbilityBuilder } from '@casl/ability'

export function defineAbilitiesFor(user) {
  return AbilityBuilder.define((can, cannot) => {

    if (user) {
      if (user.role === 'ADMINISTRATOR') {
        can('read', 'SecurityMgmt')
        can('read', 'Users')
        can('read', 'User')
        can('read', 'Profile')
        can('read', 'IndexPage')
        can('read', 'ChangePassword')
      }
      else if (user.role === 'ADVANCED') {
        can('read', 'Users')
        can('read', 'User')
        can('read', 'Profile')
        can('read', 'IndexPage')
        can('read', 'ChangePassword')
      }
      else if (user.role === 'BASIC') {
        can('read', 'Profile')
        can('read', 'IndexPage')
        can('read', 'ChangePassword')
      }
      else if (user.role === 'CONTRACTOR') {
        can('read', 'Profile')
        can('read', 'IndexPage')
        can('read', 'ChangePassword')
      }
    }
    else {
      cannot('read', 'Navigation')
      cannot('read', 'IndexPage')
    }
  })
}