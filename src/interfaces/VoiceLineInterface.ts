import { MediaInterface } from './MediaInterface'

export interface VoiceLineInterface {
  minDuration: number
  maxDuration: number
  mediaList: MediaInterface[]
}
