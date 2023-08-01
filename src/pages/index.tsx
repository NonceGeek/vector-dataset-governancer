import { DAPP_ADDRESS, APTOS_FAUCET_URL, APTOS_NODE_URL, MODULE_URL } from '../config/constants';
import { useWallet } from '@manahippo/aptos-wallet-adapter';
import { MoveResource } from '@martiandao/aptos-web3-bip44.js/dist/generated';
import { useState, useEffect } from 'react';
import React from 'react';
import { AptosAccount, WalletClient, HexString } from '@martiandao/aptos-web3-bip44.js';

// import { CodeBlock } from "../components/CodeBlock";

// import { TypeTagVector } from "@martiandao/aptos-web3-bip44.js/dist/aptos_types";
// import {TypeTagParser} from "@martiandao/aptos-web3-bip44.js/dist/transaction_builder/builder_utils";
export default function Home() {
  const [hasAddrAggregator, setHasAddrAggregator] = React.useState<boolean>(false);
  const [services, setServices] = React.useState<Array<any>>([]);
  const { account, signAndSubmitTransaction } = useWallet();
  // TODO: refresh page after disconnect.
  const client = new WalletClient(APTOS_NODE_URL, APTOS_FAUCET_URL);
  // const [resource, setResource] = React.useState<MoveResource>();
  const [formInput, updateFormInput] = useState<{
    title: string;
    content: string;
    contributor: string;
    dataset_id: string;
  }>({
    title: 'a test move contract',
    content: 'test content',
    contributor: '0x01',
    dataset_id: 'aptos-smart-contracts-fragment-by-structure',
  });

  async function submit_proposal() {
    await signAndSubmitTransaction(do_submit_proposal(), { gas_unit_price: 100 }).then(() => {
      console.log("AHA")
      // updated it
      // POST to chat-programming.
      // setTimeout(get_services, 3000);
    });
  }



  function do_submit_proposal() {
    const { title, content } = formInput;
    return {
      type: 'entry_function_payload',
      function: DAPP_ADDRESS + '::governancer::proposal',
      type_arguments: [],
      arguments: [title, content],
    };
  }
  return (
    <div>
      <center>
        <p>
          <b>Module Path: </b>
          <a target="_blank" href={MODULE_URL} className="underline">
            {DAPP_ADDRESS}::governancer
          </a>
        </p>

        <input
          placeholder="Proposal Title"
          className="mt-8 p-4 input input-bordered input-primary w-1/2"
          onChange={(e) => updateFormInput({ ...formInput, title: e.target.value })}
        />
        <br></br>
        <input
          placeholder="Proposal Content"
          className="mt-8 p-4 input input-bordered input-primary w-1/2"
          onChange={(e) => updateFormInput({ ...formInput, content: e.target.value })}
        />
        <br></br>
        <input
          placeholder="Proposal Dataset-ID"
          className="mt-8 p-4 input input-bordered input-primary w-1/2"
          onChange={(e) => updateFormInput({ ...formInput, dataset_id: e.target.value })}
        />
        <br></br>
        <button className={'btn btn-primary font-bold mt-4  text-white rounded p-4 shadow-lg'}>
          Submit Proposal
        </button>
      </center>
    </div>
  );
}
