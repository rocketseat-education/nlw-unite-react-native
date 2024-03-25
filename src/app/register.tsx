import { useState } from "react"
import { View, Image, StatusBar, Alert } from "react-native"
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons"
import { Link, router } from "expo-router"

import { colors } from "@/styles/colors"

import { Input } from "@/components/input"
import { Button } from "@/components/button"

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  function handleRegister() {
    if (!name.trim() || !email.trim()) {
      return Alert.alert("Inscrição", "Preencha todos os campos!")
    }

    router.push("/ticket")
  }

  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8">
      <StatusBar barStyle="light-content" />

      <Image
        source={require("@/assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />

      <View className="w-full mt-12 gap-3">
        <Input>
          <FontAwesome6
            name="user-circle"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field placeholder="Nome completo" onChangeText={setName} />
        </Input>

        <Input>
          <MaterialIcons
            name="alternate-email"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={setEmail}
          />
        </Input>

        <Button title="Realizar inscrição" onPress={handleRegister} />

        <Link
          href="/"
          className="text-gray-100 text-base font-bold text-center mt-8"
        >
          Já possui ingresso?
        </Link>
      </View>
    </View>
  )
}
