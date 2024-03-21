import { TextInput, TextInputProps, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

import { colors } from "@/styles/colors"

type Props = TextInputProps & {
  icon?: keyof typeof Ionicons.glyphMap
}

export function Input({ icon, ...rest }: Props) {
  return (
    <View className="w-full h-14 flex-row items-center gap-3 p-3 border border-green-400 rounded-lg">
      {icon && <Ionicons name={icon} size={20} color={colors.green[200]} />}

      <TextInput
        className="flex-1 text-white text-base font-regular"
        placeholderTextColor={colors.gray[200]}
        {...rest}
      />
    </View>
  )
}
