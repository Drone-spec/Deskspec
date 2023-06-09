Fresh install on Endeavour

mkdir git

mdir tools

git clone --depth 1 https://github.com/ryanoasis/nerd-fonts.git ./git/nerdfont

git clone https://github.com/Drone-spec/Deskspec.git ./git/Deskspec

git clone https://github.com/fortra/impacket.git ./tools/impacket

git clone https://github.com/danielmiessler/SecLists.git ./tools/seclists

curl -O https://blackarch.org/strap.sh

echo 5ea40d49ecd14c2e024deecf90605426db97ea0c strap.sh | sha1sum -c

chmod +x strap.sh

sudo ./strap.sh

yay neovim

git clone --depth 1 https://github.com/wbthomason/packer.nvim\
 ~/.local/share/nvim/site/pack/packer/start/packer.nvim

yay brave

yay responder

yay lazygit

yay obsidian

yay socat

yay tcpdump

yay pipx

yay powershell

yay powersploit

yay burpsuite

yay exploitdb

yay ffuf

pipx install ./tools/impacket

yay flameshot

curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

cargo install bottom

cargo install mdbook

yay hashcat

yay chisel

yay proxychains-ng

yay nmap

yay openbsd-netcat
