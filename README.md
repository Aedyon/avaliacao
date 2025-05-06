# Como criar um emulador no Android Studio
1. Abra o Android Studio.  
2. No menu superior, vá em **“Tools” > “AVD Manager”**.  
3. Clique em **“Create Virtual Device…”**.  
4. Escolha um dispositivo (e.g. Pixel 5), clique em **“Next”**.  
5. Selecione uma imagem do sistema (e.g. Android 12), clique em **“Next”** e depois em **“Finish”**.

## Como habilitar o SDK
1. No Android Studio, vá em **“Tools” > “SDK Manager”**.  
2. Em **“SDK Platforms”**, marque a versão desejada (e.g. Android 12).  
3. Em **“SDK Tools”**, certifique‑se de que **“Android SDK Build-Tools”**, **“Android SDK Platform-Tools”** e **“Android SDK Tools”** estão marcados.  
4. Clique em **“Apply”** e **“OK”** para baixar/instalar.

## Como configurar o ANDROID_HOME e JAVA_HOME
### No macOS/Linux (bash ou zsh)
```bash
# Exemplo para o ~/.bashrc ou ~/.zshrc
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools

export JAVA_HOME=$(/usr/libexec/java_home)   # assume JDK instalado
export PATH=$PATH:$JAVA_HOME/bin
