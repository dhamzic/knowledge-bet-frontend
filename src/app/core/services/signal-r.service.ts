import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as signalR from '@microsoft/signalr';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection!: signalR.HubConnection;
  connectionAttempts: number = 0;
  isConnected = false;

  constructor() { }

  public buildConnection(): void {
    console.log(`${apiUrl}appHub`);
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${apiUrl}appHub`)
      .build();

    this.startConnection();

    this.hubConnection.on('transferMessageData', (data) => {
      console.log('signalR message has been received: ' + data);
    })

    //on disconnect
    this.hubConnection.onclose(() => { 
      this.isConnected = false;
      setTimeout(() => this.startConnection(), 3000)
    });
  }

  private startConnection = () => {
    this.connectionAttempts++;

    this.hubConnection
      .start()
      .then(() => {
        this.connectionAttempts = 0;
        this.isConnected = true;
        console.log('signalR Connection started');
      })
      .catch(err => {
        console.log('Error while establishing signalR connection. ' + this.connectionAttempts + ' try for connection')
        setTimeout(() => this.startConnection(), 3000);
      });
  }

  public addTransferMessageDataListener = () => {
    this.hubConnection.on('broadcastMessageData', (data) => {
      console.log(data);
    })
  }
}
