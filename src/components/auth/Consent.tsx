import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Consent = () => {
  return (
    <View style={consentStyles.container}>
      <Text>By continuing, you agree to our</Text>
      <View style={consentStyles.row}>
        {['Terms of Service', 'Privacy Policy', 'Content Policies'].map(
          (contract) => (
            <Contract name={contract} key={contract} />
          )
        )}
      </View>
    </View>
  );
};

const Contract = ({ name }: { name: string }) => (
  <TouchableOpacity>
    <View style={consentStyles.contract}>
      <Text style={consentStyles.text}>{name}</Text>
      <View style={consentStyles.divider}></View>
    </View>
  </TouchableOpacity>
);

const consentStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  row: {
    flexDirection: 'row',
  },
  contract: {
    marginBottom: 10,
    margin: 10,
    padding: 0,
    alignItems: 'center',
  },
  divider: {
    borderWidth: 0.5,
    borderStyle: 'dashed',
    borderRadius: 0.0000001,
    borderColor: '#696969',
    width: '100%',
  },
  text: {
    fontSize: 12,
    color: '#696969',
  },
});
