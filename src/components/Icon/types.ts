import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import type { themeType } from '@/types/index'

export interface IconProps {
  border?: boolean
  fixedWidth?: boolean
  flip?: 'horizontal' | 'vertical' | 'both'
  icon: object | Array<string> | string | IconDefinition
  mask?: object | Array<string> | string
  maskId?: object | Array<string> | string
  listItem?: boolean
  pull?: 'right' | 'left'
  pulse?: boolean
  rotation?: 90 | 180 | 270 | '90' | '180' | '270'
  swapOpacity?: boolean
  size?:
    | '2xs'
    | 'xs'
    | 'sm'
    | 'lg'
    | 'xl'
    | '2xl'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x'
  spin?: boolean
  transform?: object | string
  symbol?: boolean | string
  title?: string
  titleId?: string
  inverse?: boolean
  bounce?: boolean
  shake?: boolean
  beat?: boolean
  fade?: boolean
  beatFade?: boolean
  spinPulse?: boolean
  spinReverse?: boolean
  type?: themeType
  color?: string
}

// type Demo = "a" | "b" | "c"
// type UnionToIntersection<U> = (U extends any ? (a: (k: U) => void) => void : never) extends (a: infer I) => void ? I : never;
// type UnionLast<U> = UnionToIntersection<U> extends (a: infer I) => void ? I : never;
// type UnionToTuple<U> = [U] extends [never] ? [] : [...UnionToTuple<Exclude<U, UnionLast<U>>>, UnionLast<U>];

// type Test = UnionToTuple<Demo>
