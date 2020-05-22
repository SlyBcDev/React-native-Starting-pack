exports.contract = {
  address: '0x12caee41d936bb8e7b7dafec4b13e6ebdb6ac46b',
  addressOld: '0x18CA153cF140a40021AdA1b84741ee22F38e0457',
  hashToTokenId: {
    constant: true,
    inputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'hashToTokenId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  balanceOf: {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  instrument: {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'instrument',
    outputs: [
      {
        internalType: 'string',
        name: 'brand',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'model',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'instrumentType',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'ownerNickName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'ownerMail',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'birthDateOfInstrument',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'serialNumber',
        type: 'string',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  tokenOfOwnerByIndex: {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  picture: {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'pictures',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  numberOfPictures: {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'numberOfPictures',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  numberOfStories: {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'numberOfStories',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  storyOfInstrument: {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'storieOfInstrument',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  checkInInstrument: {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_tempOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_brand',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_model',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_instrumentType',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_serialNumber',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_picture',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_hashUidNfcTag',
        type: 'string',
      },
    ],
    name: 'checkInInstrument',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  takeOwnership: {
    constant: false,
    inputs: [
      {
        internalType: 'string',
        name: '_ownerNickName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_ownerMail',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_hashUidNfcTag',
        type: 'string',
      },
      {
        internalType: 'address',
        name: '_futurOwner',
        type: 'address',
      },
    ],
    name: 'takeOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  eventNewInstrument: {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: '_brand',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: '_serialNumber',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_certifier',
        type: 'address',
      },
    ],
    name: 'newInstrument',
    type: 'event',
  },
  abi: [
    {
      inputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'approved',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'operator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'approved',
          type: 'bool',
        },
      ],
      name: 'ApprovalForAll',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: '_id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'date',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: '_message',
          type: 'string',
        },
      ],
      name: 'hasBeenRecover',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: '_id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'date',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: '_message',
          type: 'string',
        },
      ],
      name: 'hasBeenStolenOrLost',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: '_id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '_date',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: '_details',
          type: 'string',
        },
      ],
      name: 'historyEvent',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: '_id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: '_brand',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'string',
          name: '_serialNumber',
          type: 'string',
        },
        {
          indexed: true,
          internalType: 'address',
          name: '_certifier',
          type: 'address',
        },
      ],
      name: 'newInstrument',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: '_id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'date',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: '_newOwnerAddress',
          type: 'address',
        },
      ],
      name: 'newOwner',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: '_id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'date',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: '_location',
          type: 'string',
        },
      ],
      name: 'warningAlarm',
      type: 'event',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: '_isAdmin',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: '_isCertifier',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_newAdmin',
          type: 'address',
        },
      ],
      name: 'addAdmin',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_newCertifier',
          type: 'address',
        },
      ],
      name: 'addCertifier',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_newCanTransferTokenFromContract',
          type: 'address',
        },
      ],
      name: 'addUserCanTransferTokenFromContract',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'baseURI',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'string',
          name: '_brand',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_model',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_instrumentType',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_serialNumber',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_picture1',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_picture2',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_picture3',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_hashUidNfcTag',
          type: 'string',
        },
      ],
      name: 'checkInBrandNewInstrument',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'string',
          name: '_brand',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_model',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_instrumentType',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_serialNumber',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_picture',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_hashUidNfcTag',
          type: 'string',
        },
        {
          internalType: 'uint256',
          name: '_estimateDate',
          type: 'uint256',
        },
      ],
      name: 'checkInNotNewInstrument',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'string',
          name: '_hashUidNfcTag',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_details',
          type: 'string',
        },
      ],
      name: 'createStory',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'string',
          name: '_hashUidNfcTag',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_message',
          type: 'string',
        },
      ],
      name: 'declareRecover',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'string',
          name: '_hashUidNfcTag',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_message',
          type: 'string',
        },
      ],
      name: 'declareStolenOrLost',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_oldAdmin',
          type: 'address',
        },
      ],
      name: 'deleteAdmin',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_oldCertifier',
          type: 'address',
        },
      ],
      name: 'deleteCertifier',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_oldCanTransferTokenFromContract',
          type: 'address',
        },
      ],
      name: 'deleteUserCanTransferTokenFromContract',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'getApproved',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      name: 'hashToTokenId',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'instrument',
      outputs: [
        {
          internalType: 'string',
          name: 'brand',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'model',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'instrumentType',
          type: 'string',
        },
        {
          internalType: 'uint256',
          name: 'birthDateOfInstrument',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'serialNumber',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'operator',
          type: 'address',
        },
      ],
      name: 'isApprovedForAll',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'isStolenOrLost',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'numberOfPictures',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'numberOfStories',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'ownerOf',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'pictures',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'safeTransferFrom',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'approved',
          type: 'bool',
        },
      ],
      name: 'setApprovalForAll',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'storieOfInstrument',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4',
        },
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'string',
          name: '_hashUidNfcTag',
          type: 'string',
        },
        {
          internalType: 'address',
          name: '_futurOwner',
          type: 'address',
        },
      ],
      name: 'takeOwnership',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'index',
          type: 'uint256',
        },
      ],
      name: 'tokenByIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'index',
          type: 'uint256',
        },
      ],
      name: 'tokenOfOwnerByIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'tokenURI',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ],
};

exports.endPoint = 'https://vethor-node-test.vechaindev.com';
