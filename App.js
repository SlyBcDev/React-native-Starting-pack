import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
//import './shim.js';
import crypto from 'crypto';
import {Driver, SimpleNet} from '@vechain/connex.driver-nodejs';
import {Framework} from '@vechain/connex-framework';
import {endPoint, contract} from './BcFunctions/contract_config';
import {cry, abi, RLP, Transaction, Certificate, Bloom} from 'thor-devkit';

const App = () => {
  const getConnex = async () => {
    try {
      const driver = await Driver.connect(new SimpleNet(endPoint));
      let connex = new Framework(driver);
      console.log(connex);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let words = cry.mnemonic.generate();
    console.log(words);
    let privateKey = cry.mnemonic.derivePrivateKey(words);
    console.log('0x' + privateKey.toString('hex'));

    let mnemonic = [
      'heavy',
      'chalk',
      'response',
      'gospel',
      'you',
      'magnet',
      'file',
      'chief',
      'trap',
      'catch',
      'piano',
      'citizen',
    ];

    let ok = cry.mnemonic.validate(mnemonic);
    console.log(ok);
  }, []);
  return (
    <View>
      <Text>test</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
