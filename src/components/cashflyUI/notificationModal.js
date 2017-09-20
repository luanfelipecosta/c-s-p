import React from 'react';
import { View, Image, TouchableOpacity, TouchableWithoutFeedback, Text, StyleSheet, Modal } from 'react-native';

const styles = StyleSheet.create({
  darkOverlay: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    justifyContent: 'center',
    flex: 1,
  },
  modalContainer: {
    backgroundColor: '#fff',
    zIndex: 7,
    marginTop: 22,
    width: 303,
    alignSelf: 'center',
    borderWidth: 1.5,
    borderColor: '#8b8b8b',
  },
  modalImage: {
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  modalTitle: {
    fontWeight: '500',
    fontSize: 24,
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
  },
  content: {
    backgroundColor: '#fff',
    padding: 20,
    minHeight: 50,
  },
});
const NotificationModal = props => (
  <Modal
    transparent
    animationType="fade"
    presentationStyle={'pageSheet'}
    visible={props.visible}
    onRequestClose={() => { }}
  >
    <TouchableOpacity
      style={styles.darkOverlay}
      activeOpacity={1}
      onPress={() => props.setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <TouchableWithoutFeedback>
          <View>
            <Image source={{ uri: props.imageURL }} style={[styles.modalImage, { width: 300, height: 150, backgroundColor: 'gray' }]}>
              <Text style={styles.modalTitle}> {props.title} </Text>
            </Image>
            <View style={styles.content} >
              {props.content}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableOpacity>
  </Modal>
);

export default NotificationModal;
