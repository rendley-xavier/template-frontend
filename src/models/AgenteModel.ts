import { AbilityInterface } from '../interfaces/AbilityInterface'
import { RecruitmentDataInterface } from '../interfaces/RecruitmentDataInterface'
import { RoleInterface } from '../interfaces/RoleInterface'
import { VoiceLineInterface } from '../interfaces/VoiceLineInterface'

export interface AgenteModel {
  uuid: string
  displayName: string
  description: string
  developerName: string
  characterTags: string[]
  displayIcon: string
  displayIconSmall: string
  bustPortrait: string
  fullPortrait: string
  fullPortraitV2: string
  killfeedPortrait: string
  background: string
  backgroundGradientColors: string[]
  assetPath: string
  isFullPortraitRightFacing: boolean
  isPlayableCharacter: boolean
  isAvailableForTest: boolean
  isBaseContent: boolean
  role: RoleInterface
  recruitmentData: RecruitmentDataInterface
  abilities: AbilityInterface[]
  voiceLine: VoiceLineInterface
}
