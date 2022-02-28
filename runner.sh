#!/bin/bash

cd .config
mkdir nvim
git clone https://github.com/Drone-spec/Deskspec/init.nvim
cd ~
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/nvim
sudo apt-get install ninja-build gettext libtool libtool-bin autoconf automake cmake g++ pkg-config unzip curl doxygen
cd Downloads
git clone https://github.com/neovim/neovim
cd neovim && 
sudo make
make CMAKE_BUILD_TYPE=Release
sudo make install
sudo apt-get install python3-pip
sudo curl -sL install-node.vercel.app/lts | bash
curl -sL install-node.vercel.app/lts | bash
echo "open nvim and run :CocInstall coc-rust-analyzer"
