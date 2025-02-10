class User {
  constructor({
    id,
    name,
    email,
    password,
    role,
    personalInfo,
    cards,
    favoriteList,
    followList,
    moneyAccounts,
    balance,
    availableBalance,
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
    this.personalInfo = personalInfo;
    this.cards = cards;
    this.favoriteList = favoriteList;
    this.followList = followList;
    this.moneyAccounts = moneyAccounts;
    this.balance = balance;
    this.availableBalance = availableBalance;
  }

  changeName(name) {
    this.name = name.toCapalize();
  }
  changeEmail(email, password) {
    if (this.password === password) {
      this.email = email.toLowerCase();
    } else {
      console.log('Parola yanlış');
    }
  }
  changePassword(email, password) {
    const email = this.email.toLowerCase();
    if (this.email === email) {
      this.password = password;
    }
  }

  changePersonelInfo(address, phone) {
    this.personalInfo = {
      address,
      phone,
    };
  }

  addCard(card) {
    this.cards.push(card);
  }
  removeCard(cardIndex) {
    this.cards.filter((card, index) => index !== cardIndex);
  }

  addFavorite(book) {
    this.favoriteList.push(book);
  }
  removeFavorite(bookIndex) {
    this.favoriteList.filter((book, index) => index !== bookIndex);
  }
  addFollow(user) {
    this.followList.push(user);
  }
  removeFollow(userIndex) {
    this.followList.filter((user, index) => index !== userIndex);
  }
  addAccount(account) {
    this.moneyAccounts.push(account);
    if (account.isBlocked === false) {
      this.balance += account.availableBalance;
    }
    this.availableBalance += account.availableBalance;
  }

  blockAccount(accountIndex, blockStatus) {
    this.moneyAccounts[accountIndex].isBlocked = blockStatus;
    if (blockStatus === true) {
      this.availableBalance -=
        this.moneyAccounts[accountIndex].availableBalance;
    }
  }
  removeAccount(accountIndex) {
    this.moneyAccounts.filter((account, index) => index !== accountIndex);
    this.balance -= this.moneyAccounts[accountIndex].balance;
    this.availableBalance -= this.moneyAccounts[accountIndex].availableBalance;
  }
}

module.exports = User;
