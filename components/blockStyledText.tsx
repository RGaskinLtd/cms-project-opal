import type {BlockStyleProps} from 'sanity'
import {Text} from '@sanity/ui'
import '../css/styles.css'

export function BlockStyledText(props: BlockStyleProps) {
  const {style} = props.block
  return (
    <Text className={style}>
      { props.children }
    </Text>
  )
}
