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
sudo apt-get install python3-pip
cd neovim
make
sudo make install
sudo su
curl -sL install-node.vercel.app/lts | bash
exit
