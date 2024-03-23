import { TagsInput, TagsInputRootProps } from '@ark-ui/react'
import { } from '@ark-ui/anatomy'
import { useTagValidator } from './useCustomValidator';

type Props = {
	defaultValues: string[];
	blurBehavior?: TagsInputRootProps['blurBehavior'];
  max?: number;
  maxLength?: number;
  minLength?: number;
  allowDuplicate?: boolean;
  allowOverflow?: boolean;
}


export const SnorTagInput = (props: Props) => {
  const {
    defaultValues,
    blurBehavior,
    maxLength = 10,
    minLength,
    allowDuplicate = false,
    allowOverflow = false,
  } = props

  const { errors, clearAllValues, onValid } = useTagValidator({
    duplicate: allowDuplicate,
    maxLength,
    minLength
  });

  return (
    <>
      <TagsInput.Root
        max={3}
        validate={(details) => {
          return onValid(details);
        }}
        defaultValue={defaultValues}
        blurBehavior={blurBehavior}
        allowOverflow={allowOverflow}
        onValueInvalid={(details) => {
          console.log(details.reason)
        }}
      >
        {(api) => (
          <>
            <TagsInput.Label>Frameworks</TagsInput.Label>
            <TagsInput.Control>
              {api.value.map((value, index) => (
                <TagsInput.Item key={index} index={index} value={value}>
                  <TagsInput.ItemInput />
                  <TagsInput.ItemText>{value}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              ))}
            </TagsInput.Control>
            <TagsInput.Input placeholder="Add Framework" />
            <TagsInput.ClearTrigger onClick={clearAllValues}>Clear all</TagsInput.ClearTrigger>
          </>
        )}
      </TagsInput.Root>
      {errors.map((e) => {
        return (<p key={e.code}>{e.message}</p>)
      })}
    </>
  )
}