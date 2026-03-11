#!/usr/bin/env bash
set -e
async_install() {
  return 0
}

# පද්ධතියේ පවතින පැකේජ් මැනේජර් එක හඳුනා ගැනීම
detect_pkg() {
  if command -v pkg >/dev/null 2>&1; then
    echo "pkg"
  elif command -v apt >/dev/null 2>&1; then
    echo "apt"
  elif command -v apt-get >/dev/null 2>&1; then
    echo "apt-get"
  elif command -v pacman >/dev/null 2>&1; then
    echo "pacman"
  elif command -v dnf >/dev/null 2>&1; then
    echo "dnf"
  elif command -v yum >/dev/null 2>&1; then
    echo "yum"
  else
    echo ""
  fi
}

main() {
  local PKG=$(detect_pkg)

  if [ -z "$PKG" ]; then
    echo "දෝෂයකි: අනුමත පැකේජ් මැනේජර් එකක් හඳුනා ගැනීමට නොහැකි විය."
    exit 1
  fi

  echo "හඳුනාගත් පැකේජ් මැනේජර් එක: $PKG"
  echo "අවශ්‍ය මෘදුකාංග (Dependencies) ස්ථාපනය කරමින් පවතී..."

  case "$PKG" in
    pkg)
      pkg install -y git imagemagick nodejs ffmpeg mc nano yarn
      ;;
    apt|apt-get)
      sudo $PKG update -y
      sudo $PKG install -y git imagemagick nodejs ffmpeg webp mc nano yarn
      ;;
    pacman)
      sudo pacman -Syu --noconfirm
      sudo pacman -S --noconfirm git imagemagick nodejs ffmpeg libwebp mc nano yarn
      ;;
    dnf)
      sudo dnf install -y git ImageMagick nodejs ffmpeg libwebp mc nano yarn
      ;;
    yum)
      sudo yum install -y epel-release
      sudo yum install -y git ImageMagick nodejs ffmpeg libwebp mc nano yarn
      ;;
  esac

  echo "yarn install ක්‍රියාත්මක කරමින් පවතී..."
  yarn install || true

  echo "යෙදුම (Application) ආරම්භ කරමින් පවතී..."
  npm start

  echo "සියලුම මෘදුකාංග සාර්ථකව ස්ථාපනය කර ඇත. නැවත ආරම්භ කිරීමට \"npm start\" භාවිතා කරන්න."
}

main "$@"
