import React, { useState } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import paymentModalStyles from './styles/paymentModalStyles';

interface PaymentModalProps {
  visible: boolean;
  onClose: () => void;
}

const sampleItems = [
  {
    id: '1',
    image: require('../../assets/images/products/1.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    quantity: 1,
    price: 17.00,
  },
  {
    id: '2',
    image: require('../../assets/images/products/2.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    quantity: 1,
    price: 17.00,
  }
];

export const PaymentModal: React.FC<PaymentModalProps> = ({ visible, onClose }) => {
  const [shippingOption, setShippingOption] = useState<'standard' | 'express'>('standard');

  const totalPrice = sampleItems.reduce((sum, item) => sum + item.price * item.quantity, 0) + (shippingOption === 'express' ? 12 : 0);

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={paymentModalStyles.modalOverlay}>
        <View style={paymentModalStyles.modalContent}>
          <ScrollView>
            <Text style={paymentModalStyles.title}>Payment</Text>

            {/* Shipping Address */}
            <View style={paymentModalStyles.section}>
              <View style={paymentModalStyles.sectionHeader}>
                <Text style={paymentModalStyles.sectionTitle}>Shipping Address</Text>
                <TouchableOpacity style={paymentModalStyles.editButton}>
                  <Ionicons name="pencil" size={20} color="#0066FF" />
                </TouchableOpacity>
              </View>
              <View style={paymentModalStyles.infoBox}>
                <Text style={paymentModalStyles.infoText}>
                  26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh city
                </Text>
              </View>
            </View>

            {/* Contact Information */}
            <View style={paymentModalStyles.section}>
              <View style={paymentModalStyles.sectionHeader}>
                <Text style={paymentModalStyles.sectionTitle}>Contact Information</Text>
                <TouchableOpacity style={paymentModalStyles.editButton}>
                  <Ionicons name="pencil" size={20} color="#0066FF" />
                </TouchableOpacity>
              </View>
              <View style={paymentModalStyles.infoBox}>
                <Text style={paymentModalStyles.infoText}>+84932000000</Text>
                <Text style={paymentModalStyles.infoText}>amandamorgan@example.com</Text>
              </View>
            </View>

            {/* Items */}
            <View style={paymentModalStyles.section}>
              <View style={paymentModalStyles.sectionHeader}>
                <Text style={paymentModalStyles.sectionTitle}>Items</Text>
                <View style={paymentModalStyles.itemCountBadge}>
                  <Text style={paymentModalStyles.itemCountText}>{sampleItems.length}</Text>
                </View>
                <TouchableOpacity style={paymentModalStyles.addVoucherButton}>
                  <Text style={paymentModalStyles.addVoucherText}>Add Voucher</Text>
                </TouchableOpacity>
              </View>
              {sampleItems.map(item => (
                <View key={item.id} style={paymentModalStyles.itemRow}>
                  <View style={paymentModalStyles.itemImageWrapper}>
                    <Image source={item.image} style={paymentModalStyles.itemImage} />
                    <View style={paymentModalStyles.itemQuantityBadge}>
                      <Text style={paymentModalStyles.itemQuantityText}>{item.quantity}</Text>
                    </View>
                  </View>
                  <Text style={paymentModalStyles.itemDescription}>{item.description}</Text>
                  <Text style={paymentModalStyles.itemPrice}>${item.price.toFixed(2)}</Text>
                </View>
              ))}
            </View>

            {/* Shipping Options */}
            <View style={paymentModalStyles.section}>
              <Text style={paymentModalStyles.sectionTitle}>Shipping Options</Text>
              <TouchableOpacity
                style={[
                  paymentModalStyles.shippingOption,
                  shippingOption === 'standard' && paymentModalStyles.shippingOptionSelected
                ]}
                onPress={() => setShippingOption('standard')}
              >
                <View style={paymentModalStyles.radioCircle}>
                  {shippingOption === 'standard' && <View style={paymentModalStyles.selectedRb} />}
                </View>
                <Text style={paymentModalStyles.shippingOptionText}>Standard</Text>
                <Text style={paymentModalStyles.shippingOptionDuration}>5-7 days</Text>
                <Text style={paymentModalStyles.shippingOptionPrice}>FREE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  paymentModalStyles.shippingOption,
                  shippingOption === 'express' && paymentModalStyles.shippingOptionSelected
                ]}
                onPress={() => setShippingOption('express')}
              >
                <View style={paymentModalStyles.radioCircle}>
                  {shippingOption === 'express' && <View style={paymentModalStyles.selectedRb} />}
                </View>
                <Text style={paymentModalStyles.shippingOptionText}>Express</Text>
                <Text style={paymentModalStyles.shippingOptionDuration}>1-2 days</Text>
                <Text style={paymentModalStyles.shippingOptionPrice}>$12.00</Text>
              </TouchableOpacity>
              <Text style={paymentModalStyles.shippingNote}>
                Delivered on or before Thursday, 23 April 2020
              </Text>
            </View>

            {/* Payment Method */}
            <View style={paymentModalStyles.section}>
              <View style={paymentModalStyles.sectionHeader}>
                <Text style={paymentModalStyles.sectionTitle}>Payment Method</Text>
                <TouchableOpacity style={paymentModalStyles.editButton}>
                  <Ionicons name="pencil" size={20} color="#0066FF" />
                </TouchableOpacity>
              </View>
              <View style={paymentModalStyles.paymentMethodBadge}>
                <Text style={paymentModalStyles.paymentMethodText}>Card</Text>
              </View>
            </View>

            {/* Total and Pay Button */}
            <View style={paymentModalStyles.totalContainer}>
              <Text style={paymentModalStyles.totalText}>Total ${totalPrice.toFixed(2)}</Text>
              <TouchableOpacity style={paymentModalStyles.payButton}>
                <Text style={paymentModalStyles.payButtonText}>Pay</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <TouchableOpacity onPress={onClose} style={paymentModalStyles.closeButton}>
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
