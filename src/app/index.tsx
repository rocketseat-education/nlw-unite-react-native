import { View, Image } from "react-native"

import { Input } from "@/components/input"
import { Button } from "@/components/button"

export default function Home() {
  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8">
      <Image
        source={require("@/assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />

      <View className="w-full mt-12 gap-3">
        <Input icon="mail" placeholder="E-mail" />
        <Button title="Acessar credencial" />
      </View>
    </View>
  )
}
